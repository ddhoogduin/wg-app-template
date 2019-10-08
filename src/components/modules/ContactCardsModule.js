import React from 'react'
import {Grid, Icon, Image} from "semantic-ui-react";
import {Card} from "semantic-ui-react";
import {throwError, validateAttributes} from "../../utils/generalHelpers";

const checkImage = (cardData) =>{
    try{
        return cardData.image.data.full_url
    }
    catch (e) {
        return 'https://via.placeholder.com/150'
    }
};
const renderCard =  (cardData ,key) =>{
    return (
        <Card key={`contact-card-${key}`}>
            <Image src={checkImage(cardData)} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{cardData.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>
                        Joined in {cardData.year_joined}{cardData.year_left? ", left in "+cardData.year_left:""}
                    </span>
                </Card.Meta>
                <Card.Description>
                    {cardData.job_description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                    <Icon name='mail' />
                    {cardData.email}
            </Card.Content>
        </Card>
    )
};

const ContactCardsModule = (props) =>{
    if (props.collection){
        let module = 'contact-cards';
        let required_attributes = ['name', 'job_description', 'year_joined'];
        if (!validateAttributes(props.collection[0], required_attributes)){
            throwError.moduleAttr(module, required_attributes);return null}
        return (
            <Grid.Row>
                <Grid.Column>
                    <Card.Group textAlign={'center'} itemsPerRow={3}>
                        {props.collection.map(
                            (item, key) =>{
                                return renderCard(item, key)
                            }
                        )}
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        )
    }
    return null

};

export default ContactCardsModule