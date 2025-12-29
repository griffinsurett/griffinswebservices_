// src/integrations/preferences/language/components/LanguageSwitcher.tsx
/**
 * Language Switcher Component (Integration Default)
 *
 * Full-featured language dropdown with consent checking.
 * Uses the useLanguageSwitcher hook for all functionality.
 *
 * For custom designs, use the useLanguageSwitcher hook directly
 * in your own component.
 */

import { useState, useRef, useEffect } from "react";
import { useLanguageSwitcher } from "../hooks/useLanguageSwitcher";
import "../language-switcher.css";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const {
    currentLanguage,
    hasFunctionalConsent,
    requiresConsent,
    supportedLanguages,
    changeLanguage,
  } = useLanguageSwitcher();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const handleLanguageChange = (code: string) => {
    const result = changeLanguage(code);
    if (!result.success && result.error) {
      alert(result.error);
      return;
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="language-switcher-button notranslate"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Choose language"
        title={
          hasFunctionalConsent
            ? "Choose language"
            : "Enable functional cookies to change language"
        }
      >
        {currentLanguage.flag && (
          <span className="text-xl leading-none notranslate" aria-hidden="true">
            {currentLanguage.flag}
          </span>
        )}
        <span className="notranslate">{currentLanguage.nativeName}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        ref={dropdownRef}
        className="language-dropdown"
        role="listbox"
        aria-hidden={!isOpen}
        aria-label="Available languages"
      >
        {requiresConsent && (
          <div className="px-4 py-3 bg-yellow-50 border-b border-yellow-200 text-sm text-yellow-800">
            Enable functional cookies to use translation
          </div>
        )}

        {supportedLanguages.map((language) => (
          <button
            key={language.code}
            type="button"
            role="option"
            aria-selected={language.code === currentLanguage.code}
            className="language-option notranslate"
            onClick={() => handleLanguageChange(language.code)}
            disabled={requiresConsent && language.code !== "en"}
            style={
              requiresConsent && language.code !== "en"
                ? { opacity: 0.5, cursor: "not-allowed" }
                : undefined
            }
          >
            {language.flag && (
              <span
                className="language-option-flag notranslate"
                aria-hidden="true"
              >
                {language.flag}
              </span>
            )}
            <div className="language-option-text">
              <div className="notranslate">{language.nativeName}</div>
              <div className="language-option-native notranslate">
                {language.name}
              </div>
            </div>
            {language.code === currentLanguage.code && (
              <svg
                className="w-5 h-5 text-primary shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
