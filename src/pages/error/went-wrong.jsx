import {Button} from "antd";

export const WentWrong = () => {
    return (
        <div className={"w-full error-page went-wrong mt-10"}>
            <Button type={"primary"} size={"large"} className={"ms-7 sm:ms-0"}>Back to home</Button>
        </div>
    )
}