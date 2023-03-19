import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import getImages from '../service/getImages';
import { ToastContainer, toast } from 'react-toast';
import { LayoutStyled } from './LayoutStyled';

export class App extends Component {
  state = {
    search: '',
    images: [],
    isLoading: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== this.state.search || prevState.page !== page) {
      this.setState({
        isLoading: true,
      });

      try {
        const data = await getImages(search, page);
        this.setState(({ images }) => ({
          images: [...images, ...data.hits],
          totalHits: data.totalHits,
        }));

        if (!data.total) {
          toast.info('No results were found for your search!');
        }
      } catch (error) {
        this.setState({ error: error.message });
        toast.error(`Whoops, something went wrong ${error.message}`);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = search => {
    console.log(this.state.search);
    this.setState({ search });
  };

  render() {
    return (
      <LayoutStyled>
        <Searchbar onSubmit={this.handleSubmit} />
      </LayoutStyled>
    );
  }
}
