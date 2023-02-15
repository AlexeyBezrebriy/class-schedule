import { Bars } from "react-loader-spinner"

type Props = {}

export const Loader = (props: Props) => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <Bars
        height="80"
        width="80"
        color="rgb(87, 175, 238)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}
