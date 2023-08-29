import Featured from "@/components/Featured"
import { KPfasItemsList } from "@/data/types"

function page() {
  return (
    <div>
        <Featured knowledgeItems={KPfasItemsList} />
    </div>
  )
}

export default page