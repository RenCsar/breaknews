import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PaidIcon from '@mui/icons-material/Paid';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { NavLinkCustom } from './DropDown.Styled';
import { Tooltip } from '@mui/material';

const options = [
    'News',
    'Opinião',
    'Cultura',
    'Esporte',
    'Finanças',
    'Clima',
];

const icon = (titulo: string) => {
    const icones: { [key: string]: JSX.Element } = {
        'News': <NewspaperOutlinedIcon />,
        'Opinião': <ChatBubbleOutlineOutlinedIcon />,
        'Cultura': <ColorLensOutlinedIcon />,
        'Esporte': <SportsSoccerIcon />,
        'Finanças': <PaidIcon />,
        'Clima': <Brightness5Icon />,
    };
    return icones[titulo] || "";
};

const linkMenu = (name: string) => {
    const path: { [key: string]: string } = {
        'News': 'News',
        'Opinião': 'Opiniao',
        'Cultura': 'Cultura',
        'Esporte': 'Esporte',
        'Finanças': 'Financas',
        'Clima': 'Clima',
    }
    return path[name] || name;
}


const ITEM_HEIGHT = 52;

export default function DropDown() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title="Menu">
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
            </Tooltip>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        <NavLinkCustom
                            to={linkMenu(option)}
                            className={({ isActive, isPending }: any) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            {icon(option)}
                            {option}
                        </NavLinkCustom>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}