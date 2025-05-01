import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface LanguageSwitcherProps {
  requiredLanguages: {
    img: string;
    language: string;
    code: string;
  }[];
  onSelectionChange: (lang: string) => void;
  selectedLanguageCode: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  requiredLanguages,
  onSelectionChange,
  selectedLanguageCode,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className="flex items-center justify-between w-full p-2 border border-gray-300 rounded-full bg-white cursor-pointer shadow-md hover:shadow-lg transition-shadow"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          {requiredLanguages
            .filter((lang) => lang.code === selectedLanguageCode)
            .map((lang) => (
              <img
                key={lang.code}
                src={lang.img}
                alt={`${lang.language} logo`}
                className="w-4 h-4 mr-2"
              />
            ))}
          <span>
            {requiredLanguages
              .find((lang) => lang.code === selectedLanguageCode)
              ?.code.toUpperCase()}
          </span>
        </div>
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          {requiredLanguages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                onSelectionChange(lang.code);
                setIsOpen(false);
              }}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            >
              <img
                src={lang.img}
                alt={`${lang.language} logo`}
                className="w-4 h-4 mr-2"
              />
              <span>{lang.code.toUpperCase()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
