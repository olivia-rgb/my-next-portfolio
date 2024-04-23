
import Link from "next/link"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#121212] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center font-bold bg-[#121212]">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
          <span className="ml-2 text-sm font-medium">Olivia</span>
        </Link>
        <nav className="flex flex-1 justify-center gap-4 sm:gap-6">
          <Link
            className="text-sm font-bold hover:underline underline-offset-4"
            href="#"
            style={{
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(90deg, #8e44ad, #e74c3c)",
              color: "transparent",
            }}
          >
            Home
          </Link>
          <Link className="text-sm font-bold hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-bold hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-bold hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Link className="text-sm font-bold hover:underline underline-offset-4" href="#">
            Skills
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 inline-flex h-9 items-center justify-center rounded-md border border-gray-200 px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800">
            Light
          </button>
          <button className="dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 inline-flex h-9 items-center justify-center rounded-md border border-gray-200  px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800">
            Dark
          </button>
        </div>
      </header>
      <main className="px-4 md:px-6 flex-1 flex flex-col mt-14">
        <section
          className="w-full py-12 md:py-24 xl:py-32"
          style={{
            background: "#121212",
          }}
        >
          <div className="container grid items-center gap-6 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                <span className="text-black">Frontend Developer</span>
              </div>
              <h1 className="text-white mb-3 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Hello, I&apos;m
                </span>
                <br />
                <div />
              </h1>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-5 lg:text-xl">
                I design beautifully responsive website😍.
                <br />
                I am in so much love with what I do😘
              </p>
              <div>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800"
                  href="#"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl w-full lg:aspect-none">
              <div
                style={{
                  background: "purple",
                  borderRadius: "50%",
                  height: "200px",
                  width: "400px",
                }}
              />
              <img
                alt="Image"
                className="rounded-xl object-cover object-center aspect-[16/9]"
                height="450"
                src="/placeholder.svg"
                width="800"
              />
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 xl:py-32"
          style={{
            background: "#121212",
          }}
        >
          <div className="container grid items-center gap-6 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I am a passionate frontend developer with a love for creating stunning and responsive websites. My goal
                is to deliver high-quality projects that exceed expectations.
              </p>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl w-full lg:aspect-none">
              <img
                alt="About Me Image"
                className="rounded-xl object-cover object-center aspect-[16/9]"
                height="450"
                src="/placeholder.svg"
                width="800"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Projects</h2>
              <p className="text-gray-500 dark:text-gray-400">Here are some of the projects I&apos;ve been working on.</p>
            </div>
            <div className="grid gap-6 sm:max-w-4xl sm:grid-cols-2 md:max-w-5xl md:grid-cols-3 lg:grid-cols-1 lg:gap-10">
              <Card>
                <div className="flex flex-col h-full">
                  <CardContent className="flex-1 flex flex-col items-start">
                    <div className="mb-2">Open Source</div>
                    <h3 className="text-xl font-bold">Design Systems for Dummies</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      A comprehensive guide to understanding and implementing design systems.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" variant="ghost">
                      View Project
                    </Button>
                  </CardFooter>
                </div>
              </Card>
              <Card>
                <div className="flex flex-col h-full">
                  <CardContent className="flex-1 flex flex-col items-start">
                    <div className="mb-2">Launched</div>
                    <h3 className="text-xl font-bold">Cloudy with a Chance of Deployment</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      An app that tells you the weather forecast and deploys your code at the same time.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" variant="ghost">
                      View Project
                    </Button>
                  </CardFooter>
                </div>
              </Card>
              <Card>
                <div className="flex flex-col h-full">
                  <CardContent className="flex-1 flex flex-col items-start">
                    <div className="mb-2">In Progress</div>
                    <h3 className="text-xl font-bold">The Great Refactoring</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Currently working on refactoring the entire codebase to use the latest framework.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" variant="ghost">
                      View Project
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Skills</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I&apos;m proficient in a variety of frontend technologies and tools.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-4">
                <DribbbleIcon className="h-6 w-6" />
                <span className="font-medium">React</span>
              </div>
              <div className="flex items-center gap-4">
                <CodepenIcon className="h-6 w-6" />
                <span className="font-medium">JavaScript</span>
              </div>
              <div className="flex items-center gap-4">
                <ImageIcon className="h-6 w-6" />
                <span className="font-medium">HTML</span>
              </div>
              <div className="flex items-center gap-4">
                <ChromeIcon className="h-6 w-6" />
                <span className="font-medium">CSS</span>
              </div>
              <div className="flex items-center gap-4">
                <GitCommitIcon className="h-6 w-6" />
                <span className="font-medium">GIT</span>
              </div>
              <div className="flex items-center gap-4">
                <UmbrellaIcon className="h-6 w-6" />
                <span className="font-medium">Bootstrap</span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Me</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Have a question or want to collaborate? Send me a message.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" required type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" required />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Sales
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet our Customers</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Trusted by the best teams in the world. We help teams of all sizes.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/placeholder.svg"
                    width="140"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DribbbleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}


function GitCommitIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <line x1="3" x2="9" y1="12" y2="12" />
      <line x1="15" x2="21" y1="12" y2="12" />
    </svg>
  )
}


function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function UmbrellaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v1" />
    </svg>
  )
}
