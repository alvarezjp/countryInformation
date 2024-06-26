import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchCountry = ({ search, searchAction }) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "80%",
        height: "40px",
        borderRadius:"16px",
      }}>
      <SearchIcon sx={{ color:"black",fontSize:"32px",padding:"2px",marginLeft:"8px" }} />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Countries"
        value={search}
        onChange={searchAction}
      />
    </Paper>
  );
};

export default SearchCountry;
