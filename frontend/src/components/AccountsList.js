import React from "react";

class AccountsList extends React.Component {

    componentDidMount() {
        super.componentDidMount();
    }

    render() {
        return (
            <body className="page-landing">
            <PageTop>
                <TopPlayers topPlayersData={this.props.topPlayersData} />
            </PageTop>
            <PageBottom>
                <RecentGames recentGamesData=    {this.props.recentGamesData}/>
            </PageBottom>
            </body>
        );
    }
}

export default LandingPageBox;