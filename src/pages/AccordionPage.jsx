import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [
        {
            id: 'sadwf',
            label: 'Can i use React on a project?',
            content: 'You can. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at pellentesque augue.'
        },
        {
            id: 'idfds',
            label: 'Can i use JavaScript on a project?',
            content: 'Yes of course. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at pellentesque augue.'
        },
        {
            id: 'fgdsd',
            label: 'Can i use CSS on a project?',
            content: 'Yeah do it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at pellentesque augue.'
        },
    ];

    return (<div>
        <Accordion items={items}/>
    </div>);
}

export default AccordionPage;