import { IMAGE_SMALL_SIZE_APPENDIX, IMAGE_MEDIUM_SIZE_APPENDIX, IMAGE_LARG_SIZE_APPENDIX, IMAGE_BASE_URL } from "../../../../config"




export const genFullSourceUrl = (targetFile: string, size: "small" | "medium" | "large" | undefined) => {

    var targetUrlWithSize = "."
    switch(size){
        case "small":
            targetUrlWithSize = targetFile.replace(".", IMAGE_SMALL_SIZE_APPENDIX);
            break;
        case "medium":
            targetUrlWithSize = targetFile.replace(".", IMAGE_MEDIUM_SIZE_APPENDIX);
            break;
        case "large":
            targetUrlWithSize = targetFile.replace(".", IMAGE_LARG_SIZE_APPENDIX);
            break;
        default:
            break;
    }
    
    return IMAGE_BASE_URL + targetUrlWithSize;

}