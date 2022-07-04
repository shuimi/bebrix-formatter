import React, { ReactNode } from "react";
import { Grid } from "@mantine/core";

export const TwoSideEditorLayout = (props: { leftSlot: ReactNode, rightSlot: ReactNode }) => {
  return (
    <Grid columns={2}>
      <Grid.Col span={1}>
        {props.leftSlot}
      </Grid.Col>
      <Grid.Col span={1}>
        {props.rightSlot}
      </Grid.Col>
    </Grid>
  )
}