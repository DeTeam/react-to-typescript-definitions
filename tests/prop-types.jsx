import {Component} from 'react';
import * as P from 'prop-types';

export default class extends Component {

    static propTypes = {
      optionalString: P.string
    };

    render() {
        return (
            <div></div>
        );
    }
}
