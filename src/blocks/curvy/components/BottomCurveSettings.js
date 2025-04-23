import { ToggleControl, HorizontalRule, RangeControl } from "@wordpress/components";
import { ColorPalette } from '@wordpress/block-editor';
import metadata from '../block.json';
import { __ } from '@wordpress/i18n';

export const BottomCurveSettings = (props) => {
  return (
    <>
    <HorizontalRule />
    <RangeControl
        label={__("Width", metadata.textdomain)}
        min={100}
        max={300}
        value={props.attributes.bottomWidth || 100}
        onChange={(newValue) => {
            props.setAttributes({
                bottomWidth: parseInt(newValue),
            });
        }}
    />
    <RangeControl
        label={__("Height", metadata.textdomain)}
        min={0}
        max={200}
        value={props.attributes.bottomHeight}
        onChange={(newValue) => {
            props.setAttributes({
                bottomHeight: parseInt(newValue),
            });
        }}
    />
    <HorizontalRule />
    <div style={{ display: "flex" }}>
        <ToggleControl onChange={(isChecked) => {
            props.setAttributes({
                bottomFlipX: isChecked
            });
        }}
            checked={props.attributes.bottomFlipX} />
        <span>{__("Flip horizontally", metadata.textdomain)}</span>
    </div>
    <div style={{ display: "flex" }}>
        <ToggleControl onChange={(isChecked) => {
            props.setAttributes({
                bottomFlipY: isChecked
            });
        }}
            checked={props.attributes.bottomFlipY} />
        <span>{__("Flip vertically", metadata.textdomain)}</span>
    </div>
    <HorizontalRule />
    <div>
        <label>{__("Curve color", metadata.textdomain)}</label>
        <ColorPalette
            value={props.attributes.bottomColor}
            onChange={(newValue) => {
                props.setAttributes({
                    bottomColor: newValue
                })
            }}
        />
    </div>
</>
  )
}

