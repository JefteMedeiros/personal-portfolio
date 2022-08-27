export interface TestimonialProps {
  visibility: VisibilityType
}


export type VisibilityType = "visible" | "hidden";

export interface VisibilityProps {
  visibility: VisibilityType
}

export const visibilityOptions = {
  "visible": 1,
  "hidden": 0
}
