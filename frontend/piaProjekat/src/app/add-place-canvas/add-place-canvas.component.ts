import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import { Stage } from 'konva/lib/Stage';
import { Layer } from 'konva/lib/Layer';
import { Rect } from 'konva/lib/shapes/Rect';

@Component({
  selector: 'app-add-place-canvas',
  templateUrl: './add-place-canvas.component.html',
  styleUrls: ['./add-place-canvas.component.css']
})
export class AddPlaceCanvasComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: true }) containerRef: ElementRef;
  @Input() numberOfRooms: number;

  stage: Stage;
  layer: Layer;
  rooms: any[] = [];

  roomWidth: number = 30;
  roomHeight: number = 30;

  ngOnInit() {
    this.stage = new Stage({
      container: this.containerRef.nativeElement,
      width: window.innerWidth,
      height: window.innerHeight
    });

    this.layer = new Layer();
    this.stage.add(this.layer);
    this.resizeCanvas();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.stage.width(this.containerRef.nativeElement.offsetWidth);
    const containerHeight = this.containerRef.nativeElement.offsetHeight;
    this.stage.height(Math.min(containerHeight, 300));
  }

  ngOnDestroy() {
    this.stage.destroy();
  }

  createRoom() {
    if (this.rooms.length >= this.numberOfRooms) {
      alert('Maximum number of rooms reached');
      return;
    }

    const room = new Rect({
      x: 50,
      y: 50,
      width: this.roomWidth,
      height: this.roomHeight,
      stroke: 'green',
      draggable: true,
      dragBoundFunc: function (pos) {
        var newX = Math.max(0, Math.min(this.getStage().width() - this.width(), pos.x));
        var newY = Math.max(0, Math.min(this.getStage().height() - this.height(), pos.y));
        return {
          x: newX,
          y: newY
        };
      }
    });

    room.on('dragmove', () => {
      let overlapping = false;
      this.rooms.forEach(roomObj => {
        if (roomObj.rect !== room) {
          if (this.haveIntersection(roomObj.rect, room)) {
            overlapping = true;
          }
        }
      });
      if (overlapping) {
        room.fill('red');
      } else {
        room.fill(null);
      }
    });

    this.layer.add(room);
    this.layer.batchDraw();

    this.rooms.push({
      id: this.rooms.length + 1,
      rect: room,
      width: this.roomWidth,
      height: this.roomHeight
    });
  }

  // Helper function to check intersection between two rectangles
  haveIntersection(r1, r2) {
    return !(
      r2.x() > r1.x() + r1.width() ||
      r2.x() + r2.width() < r1.x() ||
      r2.y() > r1.y() + r1.height() ||
      r2.y() + r2.height() < r1.y()
    );
  }

  clearRooms() {
    this.layer.removeChildren();
    this.layer.draw();
    this.rooms = [];
  }
}
