export declare class HighlightElement {
    original: HTMLElement;
    clone: Node;
    offset: BoundingRectangle;
    boundingRectRefElements: Array<Node>;
    constructor(original: HTMLElement, clone?: Node, offset?: BoundingRectangle);
    repositionClone(): boolean;
    respositionOriginalByOffset(): void;
    private highlightBoundingRect();
}
export interface BoundingRectangle {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
