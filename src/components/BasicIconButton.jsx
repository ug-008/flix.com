import * as React from 'react';
import Badge from '@mui/material/Badge';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function BasicIconButton({tooltip, icon, onClick, hasBadge, sx}) {
    return (
        <Tooltip title={tooltip}>
            <IconButton onClick={onClick} sx={sx}>
                {hasBadge &&
                    <Badge variant='dot'
                            badgeContent=''
                            overlap="circular"
                            sx={{
                                "& .MuiBadge-badge": {
                                    color: "white",
                                    backgroundColor: "red",
                                    transform: 'translate(20px, -10px)',
                                }
                            }}
                        >
                    </Badge>
                }
                {icon}
            </IconButton>
        </Tooltip>
    );
}
