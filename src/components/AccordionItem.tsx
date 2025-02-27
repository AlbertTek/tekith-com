import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="border border-purple-500/20 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full p-4 text-left flex justify-between items-center bg-purple-900/10 hover:bg-purple-900/20 transition-colors"
        onClick={onClick}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <div className="p-4 text-gray-400 bg-purple-900/5">
          {answer}
        </div>
      </div>
    </div>
  );
};