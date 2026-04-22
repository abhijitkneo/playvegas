import BackButton from '@/components/common/BackButton';
import GameDescription from '@/components/common/GameDescription';
import GameMeta from '@/components/common/GameMeta';
import GameScreenshots from '@/components/common/GameScreenshots';
import SectionHeading from '@/components/common/SectionHeading';
import { getGameDetails } from '@/services/gameService'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { VscExport } from 'react-icons/vsc';

type SystemRequirements = {
    os: string | null,
    processor: string | null,
    memory: string | null,
    graphics: string | null,
    storage: string | null
}

type Screenshots = {
    id: number,
    image: string
}

export default async function GameDetails ({
    params,
} : {
    params: Promise<{id: string}>
}) {
    const {id} = await params;
    //console.log(id, "<< Game ID");
    
    const game = await getGameDetails(id)
    const system_requirements: SystemRequirements = game.minimum_system_requirements;
    const game_screenshots: Screenshots[] = game.screenshots
    //console.log(game, '<< game details');
    //console.log(game_platform, "<< Game platform");
    //console.log(game_screenshots, "<< Game Screenshots");
    
    return(
        <Container fluid>
            <Row>
                <Col md={3}>
                    <div className='sticky-top' style={{top: '16px'}}>
                        <figure>
                            <img src={game.thumbnail} alt="" className='img-fluid rounded' />
                        </figure>
                        <Button variant='primary' className='w-100 btn-with-icon' href={`${game.game_url}`} target='_blank'>
                            Play Now <VscExport size={24} />
                        </Button>

                        <hr />

                        <SectionHeading title='Min. System Requirements' size='sm' />
                        <div className="system-info bg-body rounded p-3">
                            {
                                system_requirements && (
                                    <Row className='gy-3'>
                                        {
                                            Object.entries(system_requirements).map(([key, value]) => (
                                                <Col xs={12} key={key}>
                                                    <p className="m-0 text-capitalize small">
                                                        <span className="d-block">{key}</span>
                                                        <span className="text-white">{value ?? 'NA'}</span>
                                                    </p>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                )
                            }
                            
                        </div>
                    </div>
                </Col>
                <Col md={9}>
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <BackButton />
                        <h2 className='mb-0'>About {game.title}</h2>
                    </div>
                    <p className='mb-2'>{game.short_description}</p>
                    <GameDescription description={game.description} />

                    <hr className='my-4' />
                    
                    {/* Game Screenshot section */}
                    <GameScreenshots gameTitle={game.title} screenshots={game_screenshots}/>

                    {/* Additional information section */}
                    <SectionHeading title='Additional Information' cssClass='mt-4' />
                    <GameMeta game={game} />

                </Col>
            </Row>
        </Container>
    )
}