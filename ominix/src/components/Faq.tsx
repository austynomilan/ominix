import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


function Faq() {
  return (
    <div className="w-[100%] m-auto pb-10">
      <h1 className="text-[#0F172A] font-extrabold text-[56px] text-center py-8">Frequently asked questions</h1>
    <div>
    <Accordion type="single" collapsible className="w-[80%] m-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    </div>
  )
}

export default Faq
