import React from "react";
import { Text, RichText, Image, types, Repeater } from "react-bricks/frontend";
import { TeamMemberProps } from './TeamMember'
import styles from '../../css/Team.module.css'

interface TeamProps {
  studioTitle: string;
  teamDescription: string;
  teamTitle: string;
  TeamMember: TeamMemberProps[];
}

const Team: types.Brick<TeamProps> = ({ TeamMember }) => {
  return (
    <div className={styles.teamContent}>
      <Text
        propName='studioTitle'
        placeholder=''
        renderBlock={({ children }) => (
          <h1>{children}</h1>
        )}
      />
      <RichText
        propName='teamDescription'
        renderBlock={({ children }) => (
          <p>{children}</p>
        )}
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
          types.RichTextFeatures.Highlight
        ]}
        renderHighlight={({ children }) => (
          <span style={{ color: '#F5647F' }}>{children}</span>
        )}
      />
      <Text
        propName='teamTitle'
        placeholder=''
        renderBlock={({ children }) => (
          <h1>{children}</h1>
        )}
      />
      <Repeater propName='TeamMember' />
    </div>
  )
};

//=============================
// Brick Schema
//=============================
Team.schema = {
  name: "tester",
  label: "Team",
  getDefaultProps: () => ({
    studioTitle: 'Who we are as a studio',
    teamDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    teamTitle: 'Meet Our Team',
  }),
  sideEditProps: [
    {
      name: 'studioTitle',
      label: 'Main Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'teamDescription',
      label: 'Team Description',
      type: types.SideEditPropType.Textarea,
    },
    {
      name: 'teamTitle',
      label: 'Secondary Title',
      type: types.SideEditPropType.Text,
    }
  ],
  repeaterItems: [
    {
      name: 'TeamMember',
      itemType: 'TeamMember',
      itemLabel: 'Team Member',
      min: 1
    }
  ],
};

export default Team;