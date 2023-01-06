import ListSelect from "../components/ListSelect";

function ListSelectPage() {

    const data = [
        {id: 1, name: " Orsolya Marjatta "},
        {id: 2, name: " Sigsteinn Kapil "},
        {id: 3, name: " Inger Higuel "},
        {id: 4, name: " Hann Zinoviy "},
        {id: 5, name: " Eimantas Àngel "},
        {id: 6, name: " İlayda Micah "},
        {id: 7, name: " Maksim Alik "},
        {id: 8, name: " Arlene Santi "},
        {id: 9, name: " Willemijn Jemmy "},
        {id: 10, name: " Wine Iemanjá "},
        {id: 11, name: " Amerigo Conall "},
        {id: 12, name: " Italus Ragna "}
    ];

    return (
        <ListSelect data={data}></ListSelect>
    );
}

export default ListSelectPage;