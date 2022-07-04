import { AlertCircle } from "tabler-icons-react";
import { Alert } from "@mantine/core";
import { FC } from "react";

export const NotImplementedAlert: FC<any> = ({ title, children }: { title: string, children: string }) => {
  return (
    <Alert icon={<AlertCircle size={16}/>} title={title} color="red">
      {children}
    </Alert>
  )
}