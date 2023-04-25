import React, { useState } from "react";
import { BsChevronDownMini } from "../../lib/@reacticons";

const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 bg-transparent">
            <button
                className="flex items-center justify-between w-full pl-0 pr-2 py-3 text-left text-lg font-medium text-[#1F1B4A] bg-transparent rounded-sm hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50 hover:text-[#2289FF]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className="ml-6 flex-shrink-0">
                    {isOpen ? (
                        <BsChevronDownMini className="h-5 w-5  rotate-180" />
                    ) : (
                        <BsChevronDownMini className="h-5 w-5" />
                    )}
                </span>
            </button>
            {isOpen && (
                <div className="px-4 py-2 text-gray-500 text-sm">{answer}</div>
            )}
        </div>
    );
};

const FrequentlyAsk = () => {
    const faqs = [
        {
            question: "ما هي منصة Mental Care ؟",
            answer:
                "تشمل الصحة العقلية سلامتنا العاطفية والنفسية والاجتماعية. إنه يؤثر على طريقة تفكيرنا وشعورنا وتصرفنا. كما أنه يساعد في تحديد كيفية تعاملنا مع التوتر ، والتواصل مع الآخرين ، واتخاذ القرارات."
        },
        {
            question: "كيف أعرف أنني بحاجة إلى علاج؟",
            answer:
                "إذا كنت تعاني من أعراض مرض عقلي أو تشعر بالإرهاق من تحديات الحياة ، يمكن أن يكون العلاج أداة مفيدة. تتضمن بعض العلامات التي تدل على أنك قد تستفيد من العلاج الشعور بالحزن أو القلق ، أو المعاناة من العلاقات ، أو مواجهة تغيرات في الشهية أو أنماط النوم ، أو التفكير في إيذاء النفس."
        },
        {
            question: "ماذا يمكنني أن أتوقع من العلاج؟",
            answer:
                "يوفر العلاج مساحة آمنة وداعمة لك لاستكشاف أفكارك ومشاعرك وسلوكياتك. سيعمل معالجك معك لتحديد أهدافك ووضع خطة علاج مخصصة. ستتاح لك الفرصة لمناقشة مخاوفك ، وتعلم مهارات تأقلم جديدة ، والعمل من خلال التحديات في بيئة تعاونية وغير قضائية."
        }
    ];

    return (
        <div className="bg-[#F4F7FA] py-16">
        <div className="max-w-[60%] mx-auto">
            <h2 className="text-3xl font-bold text-[#2289FF] mb-8">FAQ</h2>
            {faqs.map((faq, index) => (
                <Accordion key={index} question={faq.question} answer={faq.answer}/>
            ))}
        </div>
        </div>
    );
};


export default FrequentlyAsk