import useSWRInfinite from 'swr/infinite'

import { IListSubmission } from '@/types/submissions'

import fetcher from './fetcher'

const PAGE_SIZE = 10

const getKey = (
  pageIndex: number,
  previousPageData: { data: IListSubmission[]; nextCursor: number | null },
  taskId: string,
  assessmentId?: string
) => {
  // reached the end
  if (previousPageData && !previousPageData.data) return null

  // first page, we don't have `previousPageData`
  if (pageIndex === 0)
    return `/api/submissions?limit=10&filter=task&taskId=${taskId}${
      assessmentId
        ? `&filter=own&filter=assessment&assessmentId=${assessmentId}`
        : ''
    }`

  // add the cursor to the API endpoint
  return `/api/submissions?cursor=${
    previousPageData.nextCursor
  }&limit=10&filter=task&taskId=${taskId}${
    assessmentId
      ? `&filter=own&filter=assessment&assessmentId=${assessmentId}`
      : ''
  }`
}

// get submission list from server with infinite loading
const useSubmissionList = (taskId: string, assessmentId?: string) => {
  const {
    data: rawData,
    error,
    mutate,
    size,
    setSize,
    isValidating
  } = useSWRInfinite(
    (index, previousPageData) =>
      getKey(index, previousPageData, taskId, assessmentId),
    fetcher
  )

  const data = rawData ? rawData.map(data => data.data) : []
  const submissions: IListSubmission[] = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)
  const isRefreshing = isValidating && data && data.length === size

  return {
    submissions,
    isLoadingInitialData,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    isRefreshing,
    setSize,
    mutate,
    size
  }
}

export default useSubmissionList
