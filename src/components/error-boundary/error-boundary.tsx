import { Label } from "adwaita-web";
import React from "react";
import "./styles.scss";

export class ErrorBoundary extends React.Component<React.PropsWithChildren> {
  state = {
    error: undefined,
  };

  static getDerivedStateFromError(error: any) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <Label danger>
            There was a problem when displaying this part of the page. Please
            try again later.
          </Label>
        </div>
      );
    }

    return this.props.children;
  }
}
