import { css } from "@emotion/react";

// 메인
export const sectionStyle = css({
  backgroundColor: "rgb(220, 243, 181)",
  display: "flex",
  gap: "3rem",
  flexDirection: "row-reverse",
  justifyContent: "space-between",
  padding: "2rem",
  margin: "1rem 2rem",
  borderRadius: "1rem",
  height: "80vh"
});

// GameBoard 페이지
export const gameBoardStyle = css({
  padding: "0 1rem 0 1rem",
  flexGrow: 1,
});
export const gameTitleStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export const gameTitleNameStyle = css({
  fontWeight: "600",
  fontSize: "1.5rem",
});
export const cardWrapperStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})
export const cardContainerStyle = (gameLevel) =>
  css({
    display: "grid",
    padding: "1rem 2rem 2rem 2rem",
    aspectRatio: gameLevel === 2 ? "3/2" : "1/1",
    width: "50%",
    gridTemplateColumns: gameLevel === 1 ? "repeat(4, 1fr)" : "repeat(6, 1fr)",
    gridAutoRows: "1fr",
    gap: 8,
  });
export const cardItemStyle = css({
  border: "1px solid #ccc",
  borderRadius: "0.5rem",
  padding: "0",
  fontSize: "1.5rem",
  perspective: "1000px",
  cursor: "pointer",
  display: "grid",
  overflow: "hidden",
});
export const cardStyle = (isFlipped, ismatched) =>
  css({
    position: "relative",
    transition: "transform 0.7s",
    perspectiveOrigin: "center",
    transformStyle: "preserve-3d",
    width: "100%",
    height: "100%",
    transform: isFlipped || ismatched ? "rotateY(180deg)" : "rotateY(0)",
  });
export const cardFrontStyle = css({
  backgroundColor: "rgb(255, 255, 255)",
  zIndex: "2",
});
export const cardBackStyle = (ismatched) =>
  css({
    zIndex: "1",
    backgroundColor: ismatched ? "rgb(55, 176, 224)" : "rgb(108, 181, 210)",
    transform: "rotateY(180deg)",
  });
export const cardFrontBackStyle = css({
  position: "absolute",
  gridArea: "1/1/1/1",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backfaceVisibility: "hidden",
});

// GameInfo 페이지
export const gameInfoStyle = css({
  backgroundColor: "rgb(239, 255, 210)",
  borderRadius: "1rem",
  border: "1px solid rgb(221, 221, 221)",
  padding: "1.5rem",
  height: "70vh",
});
export const levelOptionStyle = css({
  margin: "0 0 0.6rem 0",
});
export const statusStyle = css({
  display: "flex",
  gap: "0.3rem",
  margin: "0 0 1rem 0",
});
export const statusItemTitleStyle = css({});
export const statusItemStyle = css({
  flexGrow: "1",
  flexBasis: "0",
  minWidth: "4rem",
  backgroundColor: "rgb(255,255,255)",
  borderRadius: "0.6rem",
  border: "0.5px solid rgb(221, 221, 221)",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.4rem",
});
export const messageTitleStyle = css({
  padding: "0 0 0.6rem 0.3rem",
  fontWeight: "500",
});
export const messageStyle = css({
  backgroundColor: "rgb(248, 255, 234)",
  height: "3rem",
  borderRadius: "0.4rem",
  padding: "0.3rem 0.3rem 0.3rem 0.5rem",
  border: "1px solid rgb(221,221,221)",
  display: "flex",
  alignItems: "center",
  margin: "0 0 1rem 0",
});
export const historiesWrapperStyle = css({
  height: "100%",
})
export const historiesTitleStyle = css({
  padding: "0 0 0.6rem 0.3rem",
});
export const historiesContainer = css({
  height: "62%",
  overflowY: "hidden",
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "flex-end",
});
export const historyStyle = css({
  backgroundColor: "rgb(248, 255, 234)",
  height: "1.5rem",
  borderRadius: "0.4rem",
  padding: "0.3rem 0.5rem",
  border: "1px solid rgb(221,221,221)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 0 0.3rem 0",
});

// 모달
export const modalFrameStyle = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backdropFilter: "blur(2px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const modalContainerStyle = css({
  gap: "1.5rem",
  padding: "2rem",
  backgroundColor: "white",
  border: "0.5px solid rgb(221, 221, 221)",
  borderRadius: "1.5rem",
})
export const modalRestartStyle = css({
  color: "rgb(1, 1, 1,)",
})