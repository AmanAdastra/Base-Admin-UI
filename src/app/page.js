import { ThemeSwitcher } from "@/components/core/ThemeSwitcher"

export default function Home() {
  return (
    <div>
      Home yellow <ThemeSwitcher/>
      <div className=" bg-red-400 dark:bg-pink-300">
          Hello
      </div>
    </div>
  )
}
