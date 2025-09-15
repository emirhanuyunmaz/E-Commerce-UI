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
import Link from "next/link"

export function SignInAndSignUp() {
  return (
    <div className="flex w-full h-full flex-col gap-6">
      <Tabs defaultValue="signin" >
        <TabsList>
          <TabsTrigger value="signin"  >Sign In</TabsTrigger>
          <TabsTrigger value="signup" >Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Sign in to continue and enjoy your personalized shopping experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Email" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Password</Label>
                <Input id="password" placeholder="Password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="text-white">Sign In</Button>
              <Button variant={`link`} asChild> 
                <Link href={`/resetPassword`} className="underline hover:opacity-70">Forgot Password</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Sign up now to create your account and start enjoying exclusive offers and rewards.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="grid grid-cols-2 gap-3">
                    <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name"/>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="surname">Surname</Label>
                        <Input id="surname" placeholder="Surname" />
                    </div>
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="signup_email">Email</Label>
                    <Input id="signup_email" placeholder="Email" />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="signup_password">Password</Label>
                    <Input id="signup_password" placeholder="Password" type="password"/>
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="signup_password_confirm">Password Confirm</Label>
                    <Input id="signup_password_confirm" placeholder="Password Confirm" type="password"/>
                </div>
            </CardContent>
            <CardFooter>
              <Button className="text-white">Sign Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
