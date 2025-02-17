import { memo } from 'react'

import { Group } from '@visx/group'
import { Pie } from '@visx/shape'
import { Text } from '@visx/text'

export interface IPieData {
  id: string
  value: number
  color: string
}

const PieChart = memo(function PieChart({ points }: { points: number }) {
  const size = 150
  const half = size / 2

  const pieData: [IPieData, IPieData] = [
    { id: 'score', value: points, color: '#3B82F6' },
    { id: '_score', value: 100 - points, color: '#F1F5F9' }
  ]

  return (
    <div className="flex flex-col space-y-6">
      <svg width={size} height={size} className="mx-auto">
        <Group left={half} top={half}>
          <Pie
            data={pieData}
            pieValue={data => data.value}
            outerRadius={half}
            innerRadius={() => half - 12}
            cornerRadius={10}
            padAngle={0.005}
          >
            {pie => {
              return pie.arcs.map(arc => {
                return (
                  <g key={arc.data.id}>
                    <path
                      d={pie.path(arc) as string}
                      fill={arc.data.color}
                    ></path>
                  </g>
                )
              })
            }}
          </Pie>

          <text textAnchor="middle" dy={5} fontSize={'1.25rem'}>
            <tspan fill="currentColor" fontWeight={500}>
              {points}
            </tspan>
            <tspan fill="#94A3B8" fontWeight={300}>
              /
            </tspan>
            <tspan fill="#94A3B8" fontWeight={300}>
              100
            </tspan>
          </text>

          <Text
            textAnchor="middle"
            dy={25}
            fontSize={'0.75rem'}
            fontWeight={300}
            fill="currentColor"
          >
            points
          </Text>
        </Group>
      </svg>
    </div>
  )
})

export { PieChart }
