import { ToggleControl, HorizontalRule, RangeControl } from "@wordpress/components";
import { ColorPalette } from '@wordpress/block-editor';
import metadata from '../block.json';
import { __ } from '@wordpress/i18n';

export const TopCurveSettings = (props) => {
    return (
        <>
            <HorizontalRule />
            <RangeControl
                label={__("Width", metadata.textdomain)}
                min={100}
                max={300}
                value={props.attributes.topWidth || 100}
                onChange={(newValue) => {
                    props.setAttributes({
                        topWidth: parseInt(newValue),
                    });
                }}
            />
            <RangeControl
                label={__("Hight", metadata.textdomain)}
                min={0}
                max={200}
                value={props.attributes.topHight}
                onChange={(newValue) => {
                    props.setAttributes({
                        topHight: parseInt(newValue),
                    });
                }}
            />
            <HorizontalRule />
            <div style={{ display: "flex" }}>
                <ToggleControl onChange={(isChecked) => {
                    props.setAttributes({
                        topFlipX: isChecked
                    });
                }}
                    checked={props.attributes.topFlipX} />
                <span>{__("Flip horizontally", metadata.textdomain)}</span>
            </div>
            <div style={{ display: "flex" }}>
                <ToggleControl onChange={(isChecked) => {
                    props.setAttributes({
                        topFlipY: isChecked
                    });
                }}
                    checked={props.attributes.topFlipY} />
                <span>{__("Flip vertically", metadata.textdomain)}</span>
            </div>
            <HorizontalRule />
            <div>
                <label>{__("Curve color", metadata.textdomain)}</label>
                <ColorPalette
                    // disableCustomColors
                    // colors={[
                    // 	{ name: 'red', color: '#f00' },
                    // 	{ name: 'white', color: '#fff' },
                    // 	{ name: 'blue', color: '#00f' },
                    // ]}
                    value={props.attributes.topColor}
                    onChange={(newValue) => {
                        props.setAttributes({
                            topColor: newValue
                        })
                    }}
                />
            </div>
        </>
    )
}