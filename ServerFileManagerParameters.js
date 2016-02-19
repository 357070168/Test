define([
    "jquery"
], function ($) {
    //查询参数
    var ServerFileManagerParameters  = {
        /// <field name='Operation' type='String'>操作指的是上传、浏览、删除、新建文件夹、重命名等</field>
        Operation: "Operation",

        /// <field name='ParamNameWorkFolder' type='String'>工作目录</field>
        ParamNameWorkFolder: "WorkFolder",

        /// <field name='ParamNameCreateFolderName' type='String'>创建文件夹参数名称</field>
        ParamNameCreateFolderName: "CreateFolder_Name",

        /// <field name='ParamNameCreateFolderOverwriteExisting' type='String'>覆盖已经存在的文件夹</field>
        ParamNameCreateFolderOverwriteExisting: "CreateFolder_OverwriteExisting",

        /// <field name='ParamNameOldFolderName' type='String'>重命名中新文件夹名称</field>
        ParamNameOldFolderName: "Rename_OldFolderName",


        /// <field name='ParamNameNewFolderName' type='String'>重命名中新文件夹名称</field>
        ParamNameNewFolderName: "Rename_NewFolderName",

        /// <field name='ParamNameOldFileName' type='String'>重命名中旧文件名称</field>
        ParamNameOldFileName: "Rename_OldFileName",

        /// <field name='ParamNameNewFileName' type='String'>重命名中新文件名称</field>
        ParamNameNewFileName: "Rename_NewFileName",

        /// <field name='ParamNameDeletes' type='String'>删除资源</field>
        ParamNameDeletes: "Delete_Deletes",

        /// <field name='ParamNameDownloadFileNames' type='String'>下载文件</field>
        ParamNameDownloadFileNames: "Download_FileNames",

        /// <field name='ParamNameDownloads' type='String'>压缩下载文件或者文件夹</field>
        ParamNameDownloads: "Downloads_FileNamesOrFolderNames",

        /// <field name='GPServiceName' type='String'>GP服务的名称</field>
        GPServiceName: "GPServiceName",

        /// <field name='UploadParamPrefix' type='String'>重命名中新文件夹名称</field>
        //UploadParamPrefix : "Upload_",

        /// <field name='ParamNameOverwriteExistingFiles' type='String'>重命名中新文件夹名称</field>
        ParamNameOverwriteExistingFiles: "Upload_" + "OverwriteExistingFiles",

        /// <field name='ParamNameFileName' type='String'>重命名中新文件夹名称</field>
        ParamNameFileName: "Upload_" + "FileName",

        /// <field name='ParamNameCancel' type='String'>重命名中新文件夹名称</field>
        ParamNameCancel: "Cancel",

        /// <field name='ParamNamePosition' type='String'>重命名中新文件夹名称</field>
        ParamNamePosition: "Upload_" + "Position",

        /// <field name='ParamNameFinalFileRequest' type='String'>重命名中新文件夹名称</field>
        ParamNameFinalFileRequest: "Upload_" + "FinalFileRequest",

        /// <field name='ParamNameFinalUploadRequest' type='String'>重命名中新文件夹名称</field>
        ParamNameFinalUploadRequest: "Upload_" + "FinalUploadRequest",


        /// <field name='ParamNameNewFileRequest' type='String'>重命名中新文件夹名称</field>
        ParamNameNewFileRequest: "Upload_" + "NewFileRequest",

        /// <field name='ParamNameGuid' type='String'>重命名中新文件夹名称</field>
        ParamNameGuid: "Upload_" + "Guid",

        /// <field name='ParamNameSuccess' type='String'>重命名中新文件夹名称</field>
        ParamNameSuccess: "Success",

        /// <field name='ParamNameMessage' type='String'>重命名中新文件夹名称</field>
        ParamNameMessage: "Message",

        /// <field name='ParamNameAssociatedData' type='String'>重命名中新文件夹名称</field>
        ParamNameAssociatedData: "Upload_" + "AssociatedData",

        /// <field name='ParamNameChunkTag' type='String'>重命名中新文件夹名称</field>
        ParamNameChunkTag: "Upload_" + "ChunkTag"
        
    };
    return ServerFileManagerParameters;
});
