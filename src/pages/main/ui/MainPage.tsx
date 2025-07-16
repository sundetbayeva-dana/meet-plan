import {Heading} from '@/shared/ui/Heading'
import {Card} from '@/shared/ui/Card'
import {CustomLink} from "@/shared/ui/Link";
export const MainPage = () => {
  return (
    <div className="bg-gray-50 h-[calc(100vh-80px)]">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <Heading className="text-center" level="h1">Meet Plan</Heading>
        <Heading  className="text-center">Встречайся с друзьями сколько хочешь!</Heading>

        <div className="mt-10 grid gap-4 mt-16 grid-cols-2 grid-rows-2">
          <Card className="row-span-2">
            Список встреч где ты участник
          </Card>
          <Card className="">
            <Heading className="text-center" level="h4">Создайте встречу</Heading>
            <p className="mt-1">
              Вы так давно не виделись! Но вот незадача, так неохота всех опрашивать о свободном времени...
            </p>
            <CustomLink to={'/newMeet'} className="mt-1 ">Быть смелым</CustomLink>
          </Card>
          <Card className="">
            Список встреч где ты админ
          </Card>
        </div>
      </div>
    </div>

  )
}
