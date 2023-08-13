import React, { useState, ChangeEvent } from 'react';

interface FileInputProps {
        selectedFile: File | null;
        setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const FileInput: React.FC<FileInputProps> = ({ selectedFile, setSelectedFile }) => {
        const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files?.[0];
                if (file) {
                        setSelectedFile(file);
                } else {
                        setSelectedFile(null);
                }
        };

        return (
                <div className="relative w-full my-[1vh] text-[1.8vw] md:text-[0.8vw] text-[#676767] bg-[#EAEAEA] rounded-md  px-[.5vw] py-[1.3vh]">
                        <label
                                htmlFor="fileInput"
                                className="cursor-pointer  my-[1vh] bg-[rgba(0,148,255,0.06)] text-[#0094FF] border-none rounded-md px-[.8vw] py-[.8vh] mx-[.3vw]"
                        >
                                <span>Browse</span>
                        </label>
                        <input
                                type="file"
                                id="fileInput"
                                name="fileInput"
                                className="hidden"
                                onChange={handleFileChange}
                        />
                        <span className="text-[#676767]">
                                {selectedFile ? selectedFile.name : 'No file selected'}
                        </span>
                </div>
        );
};

export default FileInput;
