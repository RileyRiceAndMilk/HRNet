declare module '@rileyriceandmilk/drop-down-menu-library' {
  import * as React from 'react';

  export interface DropdownOption {
    value: string;
    label: string;
  }

  export interface DropdownMenuProps {
    options: DropdownOption[];
    selected: DropdownOption | null;
    onChange: (option: DropdownOption) => void;
  }

  const DropdownMenu: React.FC<DropdownMenuProps>;
  export default DropdownMenu;
}





