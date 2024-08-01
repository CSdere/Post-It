'use client'
import DropzoneComponent from 'react-dropzone'

export default function Dropzone() {

    const maxSize = 20971520;

    return (
        <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({getRootProps, getInputProps, fileRejections}) => {

            const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize

            return (
                <section className='w-2/3 h-32 bg-black bg-opacity-10 dark:bg-gray-200 dark:bg-opacity-10 rounded-2xl flex justify-center items-center cursor-pointer '>
                <div {...getRootProps()} className='flex justify-center items-center'>
                    <input {...getInputProps()} />
                    <p className='cursor-pointer w-2/3 text-center'>{
                        isFileTooLarge ? 'File is too large. Pick a smaller file under 20mb' :
                        "Drag 'n' drop some files here, or click to select files"
                    }</p>
                </div>
                </section>
        )}}
        </DropzoneComponent>
    )
}