import Featured from "@/components/Featured"
import { KHbcdItemsList } from "@/data/types"

function page() {
  return (
    <div>
        <Featured knowledgeItems={KHbcdItemsList} />
    </div>
  )
}

export default page