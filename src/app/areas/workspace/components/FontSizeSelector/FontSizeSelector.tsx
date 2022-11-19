import "./FontSizeSelector.scss"

import ButtonGroup from "app/layouts/ButtonGroup/ButtonGroup"
import ButtonIcon from "app/ui/kit/Button/ButtonIcon"
import { Dispatch, useState } from "react"
import { classWithModifiers } from "utils/common"

interface FontSizeSelectorProps {
  onChange: Dispatch<string>
}

function FontSizeSelector(props: FontSizeSelectorProps) {
  enum FontSize {
    Small = "8px",
    Default = "13px",
    Big = "18px",
    Bigger = "23px",
  }
  const [fontSize, setFontSize] = useState<FontSize>(FontSize.Default)
  function updateFontSize(newFontSize: FontSize) {
    setFontSize(newFontSize)
    props.onChange(newFontSize)
  }
  return (
    <div className="font-size-selector">
      <ButtonGroup size="small" squared>
        <ButtonIcon
          className={classWithModifiers("font-size-selector__option", "small", fontSize === FontSize.Small && "active")}
          name="font-size"
          ariaLabel="font size small"
          onClick={() => updateFontSize(FontSize.Small)}
        />
        <ButtonIcon
          className={classWithModifiers("font-size-selector__option", "default", fontSize === FontSize.Default && "active")}
          name="font-size"
          ariaLabel="font size default"
          onClick={() => updateFontSize(FontSize.Default)}
        />
        <ButtonIcon
          className={classWithModifiers("font-size-selector__option", "big", fontSize === FontSize.Big && "active")}
          name="font-size"
          ariaLabel="font size big"
          onClick={() => updateFontSize(FontSize.Big)}
        />
        <ButtonIcon
          className={classWithModifiers("font-size-selector__option", "bigger", fontSize === FontSize.Bigger && "active")}
          name="font-size"
          ariaLabel="font size bigger"
          onClick={() => updateFontSize(FontSize.Bigger)}
        />
      </ButtonGroup>
    </div>
  )
}

export default FontSizeSelector
