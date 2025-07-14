import {Heading} from '@/shared/ui/Heading'
import {Card} from '@/shared/ui/Card'
export const MainPage = () => {
  return (
    <div className="bg-gray-50 h-[calc(100vh-80px)]">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <Heading className="text-center" level="h1">Meet Plan</Heading>
        <Heading  className="text-center">Встречайся с друзьями сколько хочешь!</Heading>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
          <Card className="lg:row-span-2 ">
            Список встреч где ты участник
          </Card>
          <Card className="max-lg:row-start-1">
            Создать встречу
          </Card>
          <Card className="max-lg:row-start-1">
            Список встреч где ты админ
          </Card>
        </div>
      </div>
    </div>

  )
}
