import {Button} from "antd";

export const Error404 = () => {
    return (
        <div className={"w-full error-page error-404-page mt-10"}>
            <Button type={"primary"} size={"large"} className={"ms-7 sm:ms-0"}>Back to home</Button>
        </div>
    )
}