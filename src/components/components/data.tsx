
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function DataDisplay() {
  const topics = [
    { name: 'Oil', count: 403, p: 100 },
    { name: 'Gas', count: 89, p: 25},
    { name: 'Growth', count: 51, p: 12 },
    { name: 'Energy', count: 43 , p: 10},
    { name: 'Export', count: 38 , p: 9},
    { name: 'Production', count: 35 , p: 8},
  ];
  return (
    <Card className="h-[400px] w-[400px] max-w-4xl">
      <CardHeader>
        <CardTitle>Trending Topics</CardTitle>
        <CardDescription>Overview of most common topics and their counts.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          { topics.map(topic=><div key={topic.name} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">{topic.name}</div>
              <div className="text-2xl font-bold">{topic.count}</div>
            </div>
            <div className="h-4 w-full bg-muted rounded-full">
              <div className={`h-full bg-primary rounded-[14px]`} style={{ width: `${topic.p}%` }}  />
            </div>
          </div>)}
        </div>
      </CardContent>
    </Card>
  )
}
