import React from 'react';
import { Box, Text, Group } from '@mantine/core';
import { ListSearch } from 'tabler-icons-react';
import { useStyles } from "./table-of-contents.style";
import { useNavigate } from "react-router-dom";

interface TableOfContentsProps {
  links: { label: string; link: string; order: number }[];
  active: string;
}

export function TableOfContents({ links, active }: TableOfContentsProps) {
  const { classes, cx } = useStyles();

  const navigate = useNavigate();

  const items = links.map((item) => (
    <Box
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === item.link })}
      sx={(theme) => ({ paddingLeft: item.order * theme.spacing.md })}
      onClick={() => navigate(item.link)}
    >
      {item.label}
    </Box>
  ));

  return (
    <div style={{ marginTop: '1em' }}>
      <Group mb="md">
        <ListSearch size={18}/>
        <Text>Вкладки</Text>
      </Group>
      {items}
    </div>
  );
}