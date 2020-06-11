import React from "react";
import { BasicContentBox } from "../../pages/pageframe/global/StyledComponents";
import { Typography} from "@material-ui/core";
import styles from "./ListSection.module.css"


export type SummarySectionData = {
    value: any
    label: string
}

interface Props {
    sectionHeader: string
    data: SummarySectionData[]
}

export const ListSection: React.FC<Props> = (props) => {

  return (
    <BasicContentBox>
      <Typography variant="h6">
          {props.sectionHeader}
      </Typography>
      <table>
       { props.data.map((d) => {
          return (
            <tr className={styles.listrow}>
              <td className={styles.label}>{d.label}</td> 
              <td className={styles.value}> {d.value} </td>
            </tr>
          )
        })}
      </table>
    </BasicContentBox>
  );
};