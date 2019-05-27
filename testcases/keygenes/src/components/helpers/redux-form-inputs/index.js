import checkBox from './checkBoxInput'
import text from './textInput'
import file from './fileInput'
import slider from "./sliderInput";
import select from "./selectInput";

export const textInput = ({input,label,meta,inputAttr}) => text(input,label,meta,inputAttr);
export const fileInput = (props) => file(props);
export const selectInput = ({input,label,meta,inputAttr}) => select(input,label,meta,inputAttr);
export const checkBoxInput = ({input,label,meta,inputAttr={}}) => checkBox(input,label,meta,inputAttr);
export const sliderInput = ({input,label,meta,inputAttr={}}) => slider(input,label,meta,inputAttr);
