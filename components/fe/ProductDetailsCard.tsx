import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function ProductDetailsCard() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="productDetails" className="w-full">
        <TabsList className="">
          <TabsTrigger value="productDetails">PRODUCT DETAILS</TabsTrigger>
          <TabsTrigger value="reviews">REVIEWS</TabsTrigger>
        </TabsList>
        <TabsContent value="productDetails" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>

            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Reviews</CardTitle>
              
            </CardHeader>
            <CardContent className="grid gap-6">
              
            </CardContent>

          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
