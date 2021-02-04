import React, {useEffect, useState} from "react";

import {CKEditor} from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./css/editor.css"

export const Editor = (props) => {
    useEffect(() => {
        let a = document.getElementsByClassName("ck-editor__top")[0]
        if (props.child) {
            a.style = "display:none!important";
        }
    })

    return <CKEditor
        className="editor"
        editor={ClassicEditor}
        data = {props.content}
        disabled = {props.child}
        config = {
            {
                
            }
        }
        
    >
    </CKEditor>
}