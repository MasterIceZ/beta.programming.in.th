import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { FC, Fragment, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './style.module.scss'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'
import useSubmissionData from '@/lib/useSubmissionData'

const CorrectElement: FC = () => {
  return (
    <span className="flex items-center gap-1 text-green-500">
      <CheckCircleIcon className="w-5 h-5 text-green-500" />
      Correct
    </span>
  )
}

const IncorrectElement: FC = () => {
  return (
    <span className="flex items-center gap-1 text-red-500">
      <XCircleIcon className="w-5 h-5 text-red-500" />
      Incorrect
    </span>
  )
}

export const TaskStatus: FC = () => {
  // ! TODO Reformat data
  const data = {
    'Subtask 1': [
      { id: 'something', position: 1, time: 5, memory: 64, passed: false }
    ],
    'Subtask 2': [
      { id: 'something2', position: 1, time: 5, memory: 64, passed: false }
    ],
    'Subtask 3': [
      { id: 'something3', position: 1, time: 5, memory: 64, passed: false },
      { id: 'something4', position: 2, time: 5, memory: 64, passed: false }
    ]
  }

  return (
    <section className="px-12 py-20 bg-gray-50">
      <p className="mb-6 text-lg font-semibold text-prog-gray-500">Subtasks</p>

      <div className="flex flex-col gap-6">
        {
          // ! Throwaway code
        }
        {Object.keys(data).map(dataArrayKey => (
          <Disclosure
            as={'div'}
            key={dataArrayKey}
            className="w-full px-2 bg-white rounded-md shadow-md"
          >
            {({ open }) => (
              <>
                <Disclosure.Button as={Fragment}>
                  <button
                    className={classNames(
                      'flex w-full items-center font-medium justify-between border-gray-200 py-6 px-8',
                      open && 'border-b'
                    )}
                  >
                    {dataArrayKey}
                    <motion.span
                      animate={open ? 'active' : 'hidden'}
                      variants={{
                        active: {
                          rotate: '0deg',
                          transition: { duration: 0.25, type: 'tween' }
                        },
                        hidden: {
                          rotate: '-180deg',
                          transition: { duration: 0.25, type: 'tween' }
                        }
                      }}
                    >
                      <ChevronUpIcon className="w-5 h-5" />
                    </motion.span>
                  </button>
                </Disclosure.Button>

                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel static>
                    <table className={styles['table-element']}>
                      <thead>
                        <tr>
                          <th className={styles['table-head']}>#</th>
                          <th className={styles['table-head']}>Time</th>
                          <th className={styles['table-head']}>Memory</th>
                          <th className={styles['table-head']}>Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          // ! Throwaway code
                        }
                        {data[dataArrayKey].map(subTaskData => (
                          <tr key={subTaskData.id}>
                            <td className={styles['table-body']}>
                              {subTaskData.position}
                            </td>
                            <td className={styles['table-body']}>
                              <div className={styles['unit-container']}>
                                <span className={styles['--count']}>
                                  {subTaskData.time}
                                </span>
                                <span className={styles['--unit']}>ms</span>
                              </div>
                            </td>
                            <td className={styles['table-body']}>
                              <div className={styles['unit-container']}>
                                <span className={styles['--count']}>
                                  {subTaskData.memory}
                                </span>
                                <span className={styles['--unit']}>kb</span>
                              </div>
                            </td>
                            <td className={styles['table-body']}>
                              {subTaskData.passed ? (
                                <CorrectElement />
                              ) : (
                                <IncorrectElement />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  )
}
