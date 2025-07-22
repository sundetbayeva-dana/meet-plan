import {Heading} from '@/shared/ui/Heading'
import {DataPicker} from "@/feature/DataPicker";
import {Instruction, InstructionItem} from "@/shared/ui/Instruction";

export const NewMeet = () => {

  return (
    <>
      <Heading className="text-center" level="h1">Создать встречу с твоими нытиками</Heading>
      <div className="flex gap-4 mt-2">
        <div>
          <DataPicker/>
        </div>
        <div className="flex flex-col">
          <Heading className="text-center" level="h4">Самая подробная инструкция в мире</Heading>
          <Instruction listType="ordered">
            <InstructionItem>
              В календаре выбери диапазон дат, которые тебе удобны. Не переживай, если внутри будет неподходящий день,
              мы этот поправим
            </InstructionItem>
            <InstructionItem>
              Выбери дни, когда ну совсем не сможешь. Для них - красная кнопка
            </InstructionItem>
            <InstructionItem>
              Если можешь, но есть ограничения - нажимай желтую. Не забудь написать пояснения
            </InstructionItem>
            <InstructionItem>
              Нажми кнопку готово, если все доделал
            </InstructionItem>
          </Instruction>
        </div>
      </div>
    </>
  )
}
