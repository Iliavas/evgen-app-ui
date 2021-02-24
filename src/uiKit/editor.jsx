import React, {useEffect, useState} from "react";

import {CKEditor} from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


import "./css/editor.css"

export const Editor = (props) => {
    useEffect(() => {
        let a = document.getElementsByClassName("ck-editor__top")[0]
        if (props.child) {
            try{
                console.log(a)
                a.style = "display:none!important";
            } catch{
                
            }
        }
        console.log("hello from useEffect")
    })

    return <CKEditor
        className="editor"
        editor={ClassicEditor}
        data = {props.content}
        disabled = {props.child}
        onChange = {props.onChange}
        plugins = {[]}
        toolbar = {["imageInsert"]}
        config={{ckfinder: {
            // Upload the images to the server using the CKFinder QuickUpload command
            // You have to change this address to your server that has the ckfinder php connector
            filebrowserBrowseUrl: '/ckfinder/ckfinder.html',
			filebrowserImageBrowseUrl: '/ckfinder/ckfinder.html?type=Images',
			filebrowserUploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
			filebrowserImageUploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images'
        },
        image : {
                toolbar: ["imageTextAlternative"]
        }

    }}
        
        
    >
    </CKEditor>
}