
import { Button } from "@/components/ui/button"

export function Home() {
    return (
        <div>
            <h1>A Big Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quam ipsam obcaecati inventore distinctio tempore harum! Commodi, quibusdam. 
                Eligendi corrupti est itaque voluptates ab, ex alias totam porro provident, doloribus magnam!
                </p>
            </div>
            
    )
};

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
