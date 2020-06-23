
export const BASE_BACKEND_URL = process.env.BACKEND_URL || "http://localhost:80/"

// Image Config
export const IMAGE_BASE_URL = process.env.I

export const IMAGE_SMALL_SIZE_APPENDIX = "-sm."
export const IMAGE_LARG_SIZE_APPENDIX = "-lg."
export const IMAGE_MEDIUM_SIZE_APPENDIX = "-md."

export const PROPERTY_IMAGE_UPLOAD_URL = BASE_BACKEND_URL + "upload/property/image"
export const SIGHT_IMAGE_UPLOAD_URL = BASE_BACKEND_URL + "upload/sight/image"

export const FOOTER_HEIGHT = "180px"

export const MAP_DEFAULT_FOCUS_LAT = 52.840094 // 52.521918 Berlin, 
export const MAP_DEFAULT_FOCUS_LONG = 13.405500 //13.400000

export const MAP_ZOOM_LEVEL = 9

export const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY || 'pk_test_QjPME2XYwO7RoQugLdafHJ0600thzl90BO'


